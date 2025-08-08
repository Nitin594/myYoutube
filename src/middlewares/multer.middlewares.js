import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp')             //file saved at this location in storage
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)           //req.file (for single upload) and req.files for multiple files
  }
})

const upload = multer({ 
    storage,
    
 })