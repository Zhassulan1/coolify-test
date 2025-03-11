export default function Upload({ setFile, setImageURL }: { setFile:any, setImageURL:any }) {
    

    const onDrop = (event: React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
          const selectedFile = event.dataTransfer.files[0];
          setFile(selectedFile);
          setImageURL(URL.createObjectURL(selectedFile));
          event.dataTransfer.clearData();
        }
      };
    
      const onDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault();
        event.stopPropagation();
      };
    
      const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
          const selectedFile = event.target.files[0];
          setFile(selectedFile);
          setImageURL(URL.createObjectURL(selectedFile));
        }
      };
    

      return (
        <div className="flex items-center justify-center w-full m-15">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-700 border-gray-600 hover:border-gray-500 hover:bg-gray-600"
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-400">
              WebP, PNG, JPG, HEIF (MAX. 10MB) 
            </p>
            <br />
            <p> .heic format NOT supported </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            name="image"
            multiple
            onChange={onFileChange}
            className="hidden"
          />
        </label>
      </div>
      )
}