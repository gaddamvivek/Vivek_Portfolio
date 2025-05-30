import React from 'react';
import '../styles/Certifications.css';

import sqlCert from '../Assets/c1.jpg'; // updated from .pdf to .jpg
import javaCert from '../Assets/c2.jpg';
import jsCert from '../Assets/c3.jpg';
import pythonCert from '../Assets/c4.jpg';
import webDevCert from '../Assets/c5.jpg';
import awsCert from '../Assets/aws.jpg';

const certifications = [
    {
    title: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    id: '5863bc2dc6444be8b3402fbc2bbefb66',
    skills: 'AWS Lambda • Serverless Architecture • CI/CD Pipelines',
    file: awsCert,
    fileType: 'image'
  },
  {
    title: 'Database Programming with SQL',
    issuer: 'Oracle',
    date: 'Apr 2022',
    file: sqlCert,
    fileType: 'image' // changed from 'pdf' to 'image'
  },
  {
    title: 'Java',
    issuer: 'HackerRank',
    id: 'CD43205900BB',
    skills: 'Data Structures • Java • Problem Solving',
    file: javaCert,
    fileType: 'image'
  },
  {
    title: 'Javascript',
    issuer: 'HackerRank',
    id: 'B01D8E86D04',
    skills: 'JavaScript • Data Structures',
    file: jsCert,
    fileType: 'image'
  },
  {
    title: 'Python',
    issuer: 'HackerRank',
    id: 'F8E3BF215237',
    skills: 'Python (Programming Language) • Data Structures • Algorithms',
    file: pythonCert,
    fileType: 'image'
  },
  {
    title: 'Web Development',
    issuer: 'Udemy',
    id: 'UC-186fd576-bdbc-48d2-b45d-d58315a108b6',
    file: webDevCert,
    fileType: 'image'
  }
];

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <h2 className="section-title">CERTIFICATIONS</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <h3>{cert.title}</h3>
              <p><strong>Issuer:</strong> {cert.issuer}</p>
              {cert.id && <p><strong>Credential ID:</strong> {cert.id}</p>}
              {cert.skills && <p><strong>Skills:</strong> {cert.skills}</p>}
              {cert.date && <p><strong>Issued:</strong> {cert.date}</p>}
              <div className="cert-media">
                <img src={cert.file} alt={`${cert.title} Certificate`} className="cert-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
