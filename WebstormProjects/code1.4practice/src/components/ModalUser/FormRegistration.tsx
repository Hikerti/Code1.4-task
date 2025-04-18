import React, { memo } from 'react';
import {useForm} from "react-hook-form";
import {UserRegistration} from "../../interfaces/MainInterface.ts";

const FormRegistration: React.FC = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm<UserRegistration>();

    const onSubmit = (data: UserRegistration) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full gap-2' action="">
            <div className='flex relative w-full gap-2'>
                <div className='w-1/3 relative'>
                    <span className='absolute text-red-500 font-family-primary-regular top-[-24px]'>
                        {errors.name ? errors.name.message : ''}
                    </span>
                    <input
                        className='w-full bg-gray-100 shadow-2xl p-2 rounded-[5px] outline-none
                        placeholder:text-xs
                        xl:placeholder:text-lg'
                        type="text"
                        placeholder='Имя'
                        {...register('name', { required: 'Введите имя' })}
                    />
                </div>
                <div className='w-1/3 relative'>
                    <span className='absolute text-red-500 font-family-primary-regular top-[-24px]'>
                        {errors.surname ? errors.surname.message : ''}
                    </span>
                    <input
                        className='w-full bg-gray-100 shadow-2xl p-2 rounded-[5px] outline-0
                        placeholder:text-xs
                        xl:placeholder:text-lg'
                        type="text"
                        placeholder='Фамилия'
                        {...register('surname', { required: 'Введите фамилию' })}
                    />
                </div>
                <div className='w-1/3'>
                    <input
                        className='w-full bg-gray-100 shadow-2xl p-2 rounded-[5px] outline-0
                        placeholder:text-xs
                        xl:placeholder:text-lg'
                        type="text"
                        placeholder='Введите отчество'
                        {...register('patronymic')}
                    />
                </div>
            </div>
            <div className='flex w-full'>
                <div className='w-1/2 relative flex items-center'>
                    <span className='absolute text-red-500 font-family-primary-regular right-[20px] '>
                            {errors.login ? errors.login.message : ''}
                    </span>
                    <input
                        className='w-full shadow-2xl bg-gray-100 p-2 rounded-[5px] outline-0
                        placeholder:text-xs
                        xl:placeholder:text-lg'
                        type="text"
                        placeholder='Login'
                        {...register('login', { required: 'Поле обязательное' })}
                    />
                </div>
                <div className=' w-1/2 relative flex items-center'>
                    <span className='absolute text-red-500 font-family-primary-regular right-[20px] '>
                            {errors.email ? errors.email.message : ''}
                    </span>
                    <input
                        className='w-full shadow-2xl bg-gray-100 p-2 rounded-[5px] outline-0
                        placeholder:text-xs
                        xl:placeholder:text-lg'
                        type="email"
                        placeholder='Email'
                        {...register('email', {required: 'Поле обязательное',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Некорректный email"
                            }})}
                        autoComplete="email"
                    />
                </div>
            </div>
            <div className='flex w-full gap-2'>
                <div className='w-1/2 relative flex items-center'>
                    <span className='absolute text-red-500 font-family-primary-regular left-[10px] '>
                        {errors.password ? errors.password.message : ''}
                    </span>
                    <input
                        className='w-full bg-gray-100 shadow-2xl p-2 rounded-[5px] outline-0
                        placeholder:text-xs
                        xl:placeholder:text-lg'
                        type="password"
                        placeholder={errors.password ? '' : 'Password'}
                        {...register('password', {required: 'Поле обязательное'})}
                        autoComplete="new-password"
                    />
                </div>
                <div className='w-1/2 relative flex items-center'>
                    <span className='absolute text-red-500 font-family-primary-regular left-[10px] '>
                        {errors.repeatPassword ? errors.repeatPassword.message : ''}
                    </span>
                    <input
                        className='w-full bg-gray-100 shadow-2xl p-2 rounded-[5px] outline-0
                        placeholder:text-xs
                        xl:placeholder:text-lg'
                        type="password"
                        placeholder={errors.repeatPassword ? '' : 'Repeat Password'}
                        {...register('repeatPassword', {required: 'Поле обязательное',
                        validate:
                            value => value === watch('password') || 'Пароли не совпадают'})}
                        autoComplete="curent-password"
                    />
                </div>
            </div>
            <div className='flex gap-2'>
                <input
                    type="checkbox"
                    id='rules'
                    {...register('rules')}
                />
                <label htmlFor='rules'>Вы согласны с правилами?</label>
            </div>
            <button
                type='submit'
                className='w-full bg-red-500 text-white
                    font-family-primary-bold text-[0.5rem] py-[10px] rounded-xl duration-200
                    hover:text-gray-200 hover:bg-red-600
                    sm:text-[1.75rem]'
            >
                Зарегистрироваться
            </button>
        </form>
    );
};

export default memo(FormRegistration);