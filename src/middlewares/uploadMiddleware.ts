import multer from 'multer';
import { v2 as cloudinary } from '../config/cloudinary';
import { Readable } from 'stream';

class CloudinaryStorage implements multer.StorageEngine {
  _handleFile(req: Express.Request, file: Express.Multer.File, cb: (error?: any, info?: Partial<Express.Multer.File>) => void): void {
    console.log('File buffer size:', file.buffer ? file.buffer.length : 'undefined'); // Add this line for debugging

    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: 'geohogar' }, // Optional: specify a folder in your Cloudinary account
      (error, result) => {
        if (error) return cb(error);
        cb(null, { path: result.secure_url, filename: result.public_id });
      }
    );

    const readableStream = new Readable();
    readableStream.push(file.buffer);
    readableStream.push(null);
    readableStream.pipe(uploadStream);
  }

  _removeFile(req: Express.Request, file: Express.Multer.File, cb: (error: Error | null) => void): void {
    cloudinary.uploader.destroy(file.filename, (error, result) => {
      if (error) return cb(error);
      cb(null);
    });
  }
}

const upload = multer({ storage: new CloudinaryStorage() });

export default upload;