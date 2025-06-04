import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Sigma Web Development Course\\Video 93";

let files = await fs.readdir(basepath);

for (const item of files) {
    console.log("running for", item);
    let ext = item.split(".")[item.split(".").length - 1];
    if(ext != "js" && ext != "json" && item.split(".").length > 1){
        if(fsn.existsSync(path.join(basepath, ext))){
            //move the file to this directory if its not a js or a JSON file
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
        }
        else{
            fs.mkdir(ext);
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
        }
    }
}