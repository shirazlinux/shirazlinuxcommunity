import React from 'react' 
import { Link } from 'react-router-dom'
import './404.css'
export default function Page404() {
  return (
    <div className="notfound">
     <p>404</p>
     <span>صفحه مورد نظر یافت نشد</span>

     <Link to='/'>
        برگشت به خانه
     </Link>

     <div className="ocean">
  <div className="wave"></div>
  <div className="wave"></div>
</div>

</div>
  )
} 
