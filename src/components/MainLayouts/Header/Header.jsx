import moment from 'moment/moment';
import logo from '../../../assets/logo.png'


const Header = () => {

    return (
        <div className='text-center space-y-3'>
            <div className="w-full">
            <div className=" w-1/2 mx-auto pl-16"><img src={ logo } alt="" /></div>
            </div>
            
            <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium text-[#706F6F]'>
                <span className='text-black'>{ moment().format( "dddd," ) }</span>
                { moment().format( " MMMM D, YYYY" ) }
            </p>
        </div>
    );
};

export default Header;