"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Viewer from '../components/ui/viewer';
import Progress from '../components/ui/progress';
import TimeCounter from '../components/ui/timer';

import 'react-toastify/dist/ReactToastify.css';

import Header from "../components/layout/header";
import Upload from '../components/ui/upload';
import Thumbnail from '../components/ui/thumbnail';
import Loader from '../components/ui/loader';
import PrimaryLink1 from '@/app/components/ui/primaryLink1';
import SecondaryLink from "../components/ui/secondaryLink";

const BACKEND_URL = 'https://volumizeback.gestionempresarial.cl';
// const BACKEND_URL = 'http://localhost:8000';

interface Loader {
  text: string;
  isFinished: boolean;
}


interface Progress {
  Loaders: Loader[];
}

export default function Create() {
  const [file, setFile] = useState<File>();
  const [objURL, setObjURL] = useState('');
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [isProcessed, setIsProcessed] = useState(false);
  const [loading, setLoading] = useState(false);

  let progress: Progress = {
    Loaders: [
      {
        text: 'Uploading image...',
        isFinished: file !== undefined
      },
      {
        text: 'Processing image...',
        isFinished: isProcessed
      },
      {
        text: 'Creating 3D model...',
        isFinished: !!objURL
      }, 

    ]
  };

  const debugURL = "https://volumize-bucket.s3.amazonaws.com/robot_demo.obj";

  const onRemoveImage = () => {
    setFile(undefined);
    setImageURL("");
    setObjURL('');
    setIsProcessed(false);
    setLoading(false);

    progress = {
      Loaders: [
        {
          text: 'Uploading image...',
          isFinished: file !== undefined
        },
        {
          text: 'Processing image...',
          isFinished: isProcessed
        },
        {
          text: 'Creating 3D model...',
          isFinished: !!objURL
        }, 
  
      ]
    };
  };


  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const debug = false;
    if (debug) {
      setObjURL(debugURL);
      return;
    }
    if (!file) {
      return;
    }

    try {
      setObjURL("");
      setIsProcessed(false);  
      setLoading(true);
      const data = new FormData();
      data.set('image', file);


      const processRes = await axios({
        method: 'post',
        url: `${BACKEND_URL}/process`,
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 180000,
      }).catch((error) => {
        throw new Error("Service is permanently unavailable", error.message);
      });      

      console.log('File URL:', processRes.data.image_url);
      setIsProcessed(true);

      const res = await axios.post(`${BACKEND_URL}/make_3d`, {
        image_url: processRes.data.image_url
      }, {timeout: 180000}).catch((error) => {
        throw new Error("Service is permanently unavailable", error.message);
      });
      console.log('Model URL:', res.data.model_url);
      setObjURL(res.data.model_url);
      setLoading(false);

    } catch (error: any) {
      console.log(error);
      setLoading(false);
      setIsProcessed(false);
      toast.error(error.message, {
        autoClose: 5000,
      });
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-br from-gray-900 to-black align-middle justify-between">
        <div className="min-h-screen align-middle justify-center">

          <div className='md:flex md:flex-row items-center justify-center align-top'>
            <div className='md:w-1/3 p-5 w-screen'>
              <form onSubmit={onSubmit} className='flex flex-col m-auto'>
                <div className="h-32 md:h-11"></div>
                {imageURL ? (
                  <Thumbnail imageURL={imageURL} onRemoveImage={onRemoveImage} /> 
                ) : (
                    <Upload setFile={setFile} setImageURL={setImageURL}></Upload>              
                )}

                <button
                  type="submit"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none hover:ring-blue-300 dark:hover:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-11"
                >
                  Upload
                </button>
              </form>
            </div>
            {
              loading ? ( 
                <div className='items-center md:mx-0 m-auto max-w-64'>
                  <Progress progress={progress} />
                  <TimeCounter />
                </div>
              ) : (
                (objURL) &&
                <div className='h-64 flex flex-col my-16'>
                  <span className='text-gray-400 flex flex-row justify-center px-5'> Model is ready and will appear soon depending on your internet: </span>
                  <Viewer url={objURL} rotate={[0, 0, 0]} />
                  <PrimaryLink1 text="Download" url={objURL} />
                </div>
              )
            }
            <ToastContainer />
          </div>

          <br />
          <br />
          
          <div className="align-middle justify-center flex">
            <SecondaryLink text="Try Creating 3D Model from text" url="/create/text" />
          </div>
          <div className="h-32 md:h-11"></div>
        </div>
      </div>
    </>
  );
}