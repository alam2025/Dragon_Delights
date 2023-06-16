import React, { useState } from 'react';
import SectionTitle from './Shared/SectionTitle';
import { BsDownload } from "react-icons/bs";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const Blog = () => {
      const [loader, setLoader] = useState(false);

      const downloadPDF = () => {
            const capture = document.querySelector('.blog');
            setLoader(true);
            html2canvas(capture).then((canvas) => {
                  const imgData = canvas.toDataURL('img/png');
                  const doc = new jsPDF('p', 'mm', 'a4');
                  const componentWidth = doc.internal.pageSize.getWidth();
                  const componentHeight = doc.internal.pageSize.getHeight();
                  doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
                  setLoader(false);
                  doc.save('blog.pdf');
            })
      }
      return (
            <div className=' my-container pb-24 blog px-12'>
                  <SectionTitle title={'My Blogs'} subTitle={'Learn to Know'}></SectionTitle>
                  <button
                        className='border-0 btn'
                        onClick={downloadPDF}
                        disabled={!(loader === false)}
                  >

                        {loader ? (
                              <span>Downloading</span>
                        ) : (
                              <span><BsDownload size={40} /></span>
                        )}
                  </button>
                  <section className='  grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        <div className='flex flex-col gap-4'>
                              <h3 className=' text-2xl font-semibold'>1. Differences between uncontrolled and controlled components:</h3>
                              <p className=' text-justify'>
                                    In React, form elements such as input, textarea, and select typically maintain their own state and update it based on user input. This is called an uncontrolled component, because React is not controlling the state of the form element. In contrast, a controlled component is one where the form element state is controlled by React, usually through a value prop and an onChange handler. Controlled components are often used for more complex forms, where the form data needs to be validated or manipulated before submission.
                              </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                              <h3 className=' text-2xl font-semibold'>2. How to validate React props using PropTypes:</h3>
                              <p className=' text-justify'>
                                    PropTypes is a library that allows you to specify the types of props that a component should expect. To use PropTypes, you first need to import it: <code>import PropTypes from 'prop-types';</code> Then, you can define the PropTypes for each prop in your component using the static propTypes property, like this: <code>MyComponent.propTypes = {'{'} name: PropTypes.string.isRequired, age: PropTypes.number.isRequired {'}'}</code>. This will ensure that if the wrong type of prop is passed to your component, a warning will be shown in the console.
                              </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                              <h3 className=' text-2xl font-semibold'>3. Difference between nodejs and express js:</h3>
                              <p className=' text-justify'>
                                    Node.js is a server-side runtime environment that allows you to run JavaScript code on the server. Express.js is a web application framework for Node.js that provides a set of features and tools for building web applications, such as routing, middleware, and templating. While Node.js provides the runtime environment, Express.js provides the tools and structure for building web applications.
                              </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                              <h3 className=' text-2xl font-semibold'>4. What is a custom hook, and why will you create a custom hook?</h3>
                              <p className=' text-justify'>
                                    A custom hook is a function that uses one or more React hooks to encapsulate and reuse some piece of logic. Custom hooks allow you to abstract away complex logic into a reusable function, which can be used in multiple components. For example, you might create a custom hook that fetches data from an API and returns the data along with a loading flag and an error flag. You would then be able to use this custom hook in multiple components that need to fetch data from the same API. Custom hooks can also help to keep your component code clean and focused on rendering, by moving complex logic to a separate function.
                              </p>
                        </div>
                  </section>
            </div>
      );
};

export default Blog;