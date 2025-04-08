
const GeoPage = () => {
    return (
        <>
            <img className='mt-[-20px] w-full' src="/images/map.jpg" alt="map"/>
            <div className='flex justify-evenly items-center pt-[20px]'>
                <p>Номер телефона: <a target='_blank' href="tel:+79223408104">8 922 340 81 04</a></p>
                <p>Email: <a target='_blank' href="mailto:anikaev2007@gmail.com">anikaev2007@gmail.com</a></p>
                <p>Адрес: <a target='_blank' href="https://www.google.ch/maps/place/Kairo,+Gouvernement+Al-Qahira,+%C3%84gypten/@30.0596113,31.1760624,12z/data=!3m1!4b1!4m6!3m5!1s0x14583fa60b21beeb:0x79dfb296e8423bba!8m2!3d30.0444196!4d31.2357116!16zL20vMDF3MnY?hl=de&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">д. Пушкина</a></p>
            </div>
        </>
    );
};

export default GeoPage;