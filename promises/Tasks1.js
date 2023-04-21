// Tasks : (use promise)
// 1. Write a function to download a datafrom a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl

function download(url){
    return new Promise(function exec(resolve){
        console.log("started downloading",url)

        setTimeout(function downloading(){
            let content = "ABCDEF"
            resolve(content)
        },6000)
    })
}

function writingFile(data){
    console.log("started writing the file",data)
    return new Promise(function Writing(resolve){

        setTimeout(function exec(){
        console.log("completed writing the file")
        const filename  = "file.txt"
        resolve(filename)
        },4000)
    })
}

function uploading(url,file){
    console.log("started uploading",file,"on",url)

    return new Promise(function up(resolve){

        setTimeout(function exec(){
        console.log("upload complete")
        const response = "success"
        resolve(response)
        })
    },4000)
}

let x = download("www.xyz.com")
x.then(function fullfillhandler(content){
    console.log("we are going to process the download data")
    return writingFile(content)
})
  .then(function fullfillhandler(filename){
    console.log("We have downloaded and written the file,now upload is remaining")
   return uploading("www.abc.com",filename)
        })
   .then(function fullfillhandler(response){
        console.log("we have uploaded with",response)
     })