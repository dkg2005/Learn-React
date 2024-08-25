  const conf = {

    appwriteUrl: 'https://cloud.appwrite.io/v1',

    appwriteProjectId: '66afc98800147d2fb1c9',

    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  }

  export default conf
