

const currYear = new Date().getFullYear();
const Footer = () => {
    return (
  
       
      
      <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
      <p>
          Copyright &copy; {currYear}, Made with 💗 by <strong>Himanshu_vaishy</strong>
        </p>
      </div>
  </footer>
    );
  };

  export default Footer;