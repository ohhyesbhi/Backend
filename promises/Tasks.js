// Tasks : (Don't use promise use callbacks only)
// 1. Write a function to download a datafrom a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl

function download(url , cb){
    console.log("started the downloading",url)
 
    setTimeout(function downloaded(){
        console.log("download completed")
        const content = "ABCDEF"
        cb(content)
    },7000)
}

function writingFile(data,cb){
    console.log("started writing file",data)
    setTimeout(function write(){
        console.log("completed writing the file")
        const filename  = "file.txt"
        cb(filename)
    },5000)
}

function uploadfile(url,file,cb){
    console.log("started uploading",file,"on",url)
    setTimeout(function uploading(){
        console.log("upload complete")
        const response = "success"
        cb(response) 
    },3000)
}

download("www.xyz.com",function processDownload(content){
    console.log("we are going to process the downloaded data")

    writingFile(content,function processWrite(filename){
        console.log("We have downloaded and written the file,now upload is remaining")

        uploadfile("www.upload.com",filename,function processUpload(response){
            console.log("we have uploaded with",response)
        })
    })
})

