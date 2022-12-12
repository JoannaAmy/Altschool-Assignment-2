const BlogTwo = () => {
  
  
    return (
      <div className="blog-details">
        <h1>Instruction</h1>
        <p>Pick 1 out of the 2 questions below, implement it according to detail and follow the steps involved in the submission.
</p>
        <h2>Questions:

        </h2>
        <ol>
          <li>
            Setup react-router, implement Nested routes, 404 page, and Error boundary. Set up fake userAuthContext using the context API to always carry out a fake authentication, bonus - extract out a custom hook to get the currently logged-in user. Implement SEO and Navigation menu that will show on each page.

          </li>
          <li>
            Set a firebase hosting and authentication using the Google Authentication method, and set up backend pagination using randomuser.me paginated API URLs. Show the necessary navigation and its disabled state. Show accessibility state as well. Show SEO for each page, show a navigation menu at the top of each page, implement Error boundary and provide a page to test it, 404 page, and proper UI designs.

          </li>
        </ol>
        
      </div>
    );
  }
   
  export default BlogTwo;