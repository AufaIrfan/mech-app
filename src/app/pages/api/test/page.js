'use client'
import React from 'react';
import { useEffect, useState } from 'react';

export default function TestPage(){
useEffect(() => {
    const checkDb = async () => {
      try {
        const res = await fetch('/api/page');
        const data = await res.json();
        console.log(data.message);
      } catch (err) {
        console.error('Error checking DB:', err);
      }
    };
  
    checkDb();
  }, [])
};