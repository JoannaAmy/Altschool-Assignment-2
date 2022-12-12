import { Link } from "react-router-dom";

const BlogList = () => {
  return (
    
    <div className="blog-list">
      <div className="blog-preview">

      
        <Link to="/blogs/1">
          <button className="blog1">Blog 1</button>
        </Link>
         </div>
      <div className="blog-preview2">
        <Link to="/blogs/2">
          <button className="blog2">Blog 2</button>
        </Link>
      </div>  
     
    </div>
   
  );
};

export default BlogList;
