import './Paragraph.css'; 

export default function Paragraph({ text }) {
  return (
    <p className='paragraph-container'>
      { text }
    </p>
  );
}

