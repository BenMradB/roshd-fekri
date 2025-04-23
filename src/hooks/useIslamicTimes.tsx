"use client";

import { PrayerTimesURL } from "@/constants/constants";
import axios from "axios";
import { useEffect, useState } from "react";

export const useIslamicTimes = () => {
  const [islamicTimings, setIslamicTimings] = useState<{
    [key: string]: string;
  }>({});

  const [location, setLocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = today.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (err) => {
        setError(`Error: ${err.message}`);
      }
    );
  }, []);

  useEffect(() => {
    const getIslamicTimes = async () => {
      const fullUrl = `${PrayerTimesURL}/${formattedDate}`;

      const {
        data: {
          data: { timings },
        },
      } = await axios.get(fullUrl, {
        params: {
          latitude: location?.lat,
          longitude: location?.lon,
          shafaq: "ahmer",
        },
      });

      console.log("Prayer Times:", timings);

      setIslamicTimings(timings);
    };
    if (location) {
      console.log("Location:", location);
      getIslamicTimes();
    } else if (error) {
      console.error(error);
    }
  }, [location, error]);

  return { islamicTimings, error, location };
};
