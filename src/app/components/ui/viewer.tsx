// "use client";

import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { useState } from "react";
import Scene from "./scene";
import StretchBtn from './stretchBtn';

interface Props{
    url: string;
    rotate: number[];
    height?: number;
    width?: number;
}

export default function Viewer({url, rotate, height=250, width=600}: Props) {
    const [isMaximized, setIsMaximized] = useState(false);

    const toggleMaximize = () => {
        setIsMaximized(!isMaximized);
    };
    
    return (
        <div className={`content-center flex flex-fol items-center justify-center ${isMaximized? 'absolute inset-x-0 top-0 bg-gradient-to-br from-gray-900 to-black' : 'relative'}`}>
            <Canvas 
                shadows
                style={{ 
                    height: (isMaximized ? window.innerHeight : height), 
                    width: (isMaximized ? window.innerWidth : width) 
                }}
                className="flex items-center justify-center"
            >
                <ambientLight intensity={2} />
                <directionalLight 
                    position={[0, 0, 0]} 
                    intensity={1} 
                    castShadow 
                    scale={5}
                />

                <Suspense fallback={null}>
                    <Scene url={url} rotate={rotate}/>
                    <OrbitControls />
                </Suspense>
            </Canvas>

            <div className='float-right absolute bottom-10 right-10'>
                <StretchBtn onClick={toggleMaximize}/>
            </div>
        </div>
    )
}