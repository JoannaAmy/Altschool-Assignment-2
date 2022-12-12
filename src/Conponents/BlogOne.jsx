
const BlogOne = () => {
  return (
    <div className="blog-details">
      
      <h1>Instruction</h1>
      <p>Pick 1 out of the 2 questions below, implement it according to detail and follow the steps involved in the submission.
    </p>
      <h2>Questions:
        </h2>
      
      <ul>
      <li>
          Implement an API fetch of your GitHub portfolio, show a page with a list of all your repositories on GitHub(the page should implement pagination for the repo list), and create another page showing data for a single repo clicked from the list of repos using nested routes while using all the necessary tools in react. Implement the proper SEO, Error Boundary (show a page to test the error boundary) and 404 pages. Good UI and Designs are important. 

      </li>
        <li>
          Setup a custom counter hook with increment, decrement, reset, setValue functions with a valid UI and Implement a combination of states with a useReducer that implements a counter with the four evident features in the custom hook -  increment, decrement, reset, setValue. Implement a page for the custom hook, useReducer, 404, and a page to test error boundary and good SEO.

        </li>
      </ul>
    </div>
  );
}
 
export default BlogOne;