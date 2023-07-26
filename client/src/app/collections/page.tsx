'use client'                              
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleDocuments from '@/components/SingleDocuments';
import { useUserID } from '@/hooks/useUserID';


interface Document {
  _id: any; // Replace 'string' with the actual type of your _id property
  title: string; // Add more properties as needed
  description: string;
  content:string;
  docOwner:any;
  // Other properties of your document objects
}

const Page = () => {
  const userID = useUserID()
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {

    const loadDocs = async () => {
      try {
        const response = await axios.get<Document[]>('http://localhost:3001/api/documents/');
        setDocuments(response.data);
      } catch (err) {
        console.error('Error loading documents:', err);
      }
    };

    {userID && loadDocs()}
  }, []);

  return (
    <div className='w-5/6 mx-auto my-4'>
      <section className='my-8'>
        <div className='text-2xl font-extrabold border-b-4'>Collections</div>
        <section>
          {documents.map((document,index) => (
            <div key={document._id}>
              <SingleDocuments document={document} index={index}/>
              {/* Render other properties of your document objects as needed */}
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Page;
