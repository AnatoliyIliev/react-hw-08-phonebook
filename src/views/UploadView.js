// import axios from 'axios';
// import { useState } from 'react';

// export default function UploadView() {
//   const { selectedFile, setSelectedFile } = useState(null);

//   const handleSubmit = e => {
//     e.preventDefault();
//     const file = e.target.file.input.files[0];
//     const formData = new FormData();
//     formData.append('image', file, file.name);

// //     const response = axios
// //       .post('какой-то адрес куда скажет бекенщик', formData)
// //       .then(console.log)
// //       .catch(console.log);
// //   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <imput type="file" name="file"></imput>
//       <button tupe="submit">Загрузить</button>
//     </form>
//   );
// }
