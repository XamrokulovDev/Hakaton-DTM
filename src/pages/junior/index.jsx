import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTestSections } from '../../Redux/fetchApi';
import { selectSections, selectStatus, selectError } from '../../Redux/fetchApiSelector';

const JuniorPage = () => {
  const dispatch = useDispatch();
  const sections = useSelector(selectSections);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTestSections());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    console.log('Sections:', sections); // Bu yerda sections ma'lumotlarini ko'rsatish
    content = (
      <ul>
        {sections.map((section, index) => (
          <li key={index}>{section.id}</li>
        ))}
      </ul>
    );
  } else if (status === 'failed') {
    content = <div>Error: {error}</div>;
  }

  return (
    <div className=''>
      <h1>Junior Page</h1>
      {content}
    </div>
  );
};

export default JuniorPage;