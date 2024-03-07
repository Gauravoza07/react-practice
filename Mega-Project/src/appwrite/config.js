import conf from "../conf/conf";
import {Client, ID, Databases, Storage, Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;//Storage in doc of appwrite

    constructor()
    {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client);
    }

    //creating Post in Blog website backend logic
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,//taking slug as document-Id
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error",error);
        }
    }

    //updating the existing Post
    async updatePost(slug, {title, content, featuredImage, status})//taking slug outside because selecting document_id separately to update document
    {//slug taking separate parameter no headache of taking variable out from object
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    //Delete the created Post
    async deletePost(slug){//here we delete the post we only need document ID so we are taking slug as doc_id
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        }
        catch(error)
        {
            console.log("Appwrite serive :: deletePost :: error",error);
            return false
        }
            
    }

    //getting the Post what we have created
    async getPost(slug)
    {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite :: service :: getPost :: error", error);
            return false;
        }
       
    }

    //writing queries on to get those posts whose status is active
    async getPosts(queries = [Query.equal("status","active")])//make status is index in appwrite /databases/collection/indexes
    {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,//above i have created variable that i use here as query
                //otherwise you can also write same query here in  [ ] 
            )
            
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error",error);
        }
    }

    //file upload services
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            return true;
        }
        catch(error)
        {
            console.log("Appwrite service :: uploadFile :: error",error);
            return false
        }
    }

    //Delete File
    async deleteFile(fileId)
    {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite services :: deleteFile :: error",error);
            return false;
        }
    }

    //Here we don't use async function directly declare service Preview of File.
    //small service because it invoked fast.
    getFilePreview(fileId)
    {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service()
export default service