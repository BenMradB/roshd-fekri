/* eslint-disable @typescript-eslint/no-explicit-any */
const isDocumentExist = async (documentId: string, model: any) => {
  try {
    const document = await model.findById(documentId);
    return !document;
  } catch (error) {
    console.error("Error checking document existence:", error);
    return false;
  }
};

export default isDocumentExist;
