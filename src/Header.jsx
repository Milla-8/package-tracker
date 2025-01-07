
function Header(){
    return(
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Package Tracker
          </h2>
          <p className="mt-6 text-base/7 text-gray-600">
          We are the best package tracking service online! Can’t find the answer you’re looking for? Reach out to our support team by{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              sending us an email
            </a>{' '}
            and we’ll get back to you as soon as we can.
          </p>
        </div>


/* <div className="header">
<h1 className="header-title">Package Tracker</h1>
<p className="eader-text">We are the best package tracking service online!</p>
</div> */
    )
}

export default Header