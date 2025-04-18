import React, { memo } from 'react';
import {useForm} from "react-hook-form";
import {EntryForm} from "../../interfaces/MainInterface.ts";

const FormEntry: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<EntryForm>()

    const onSubmit = (data: EntryForm) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col w-full gap-2`} action="">
            <div className='flex relative items-center'>
                <span className='absolute text-red-500 font-family-primary-regular left-[10px]'>
                        {errors.login ? errors.login.message : ''}
                </span>
                <input
                    className='w-full shadow-2xl bg-gray-100 p-1 rounded-[5px] outline-0
                    placeholder:text-xs
                    xl:placeholder:text-lg'
                    type="text"
                    placeholder={errors.login ? '' : 'Login'}
                    {...register('login', { required: 'Поле обязательное' })}
                />
            </div>
            <div className='flex items-center relative'>
                <span className='absolute text-red-500 font-family-primary-regular left-[10px]'>
                        {errors.email ? errors.email.message : ''}
                </span>
                <input
                    className='w-full shadow-2xl bg-gray-100 p-2 rounded-[5px] outline-0
                    placeholder:text-xs
                    xl:placeholder:text-lg'
                    type="email"
                    placeholder={errors.email ? '' : 'Email'}
                    {...register('email', {required: 'Поле обязательное',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Некорректный email"
                        }})}
                />
            </div>
            <div className='flex w-full gap-2'>
                <div className='flex w-1/2 items-center relative'>
                    <span className='absolute text-red-500 font-family-primary-regular left-[10px]'>
                        {errors.email ? errors.email.message : ''}
                    </span>
                    <input
                        className='w-full bg-gray-100 shadow-2xl p-2 rounded-[5px] outline-0
                        placeholder:text-xs
                        xl:placeholder:text-lg'
                        type="password"
                        placeholder={errors.password ? '' :'Password'}
                        {...register('password', {required: 'Поле обязательно'})}
                    />
                </div>
                <div className='flex w-1/2 items-center relative'>
                    <span className='absolute text-red-500 font-family-primary-regular left-[10px]'>
                        {errors.email ? errors.email.message : ''}
                    </span>
                    <input
                        className='w-full bg-gray-100 shadow-2xl p-2 rounded-[5px] outline-0
                        placeholder:text-xs
                        xl:placeholder:text-lg'
                        type="password"
                        placeholder={errors.repeatPassword ? '' :'Repeat Password'}
                        {...register('repeatPassword',
                            {required: 'Поле обязательно',
                            validate: value => value === watch('password') || 'Пароли не совпадают'})}
                    />
                </div>
            </div>
            <button
                type='submit'
                className='w-full bg-blue-500 text-white mt-[10px]
                    font-family-primary-bold text-[1.25rem] py-[10px] rounded-xl duration-200
                    hover:text-gray-200 hover:bg-blue-600
                    sm:text-[1.75rem]'
            >
                Войти
            </button>
        </form>
    );
};

export default memo(FormEntry);