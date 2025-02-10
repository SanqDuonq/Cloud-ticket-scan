import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '@/firebase.config';
import InputComponent from '@/components/input';
import ButtonComponent from '@/components/button';
import { signInAPI } from '@/api/auth.api';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SignIn = () => {
    const [signUp, setSignUp] = useState({
        email: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const auth = FIREBASE_AUTH;

    const handleSignIn = async () => {
        setIsLoading(true);
        await signInAPI({
            email: signUp.email,
            password: signUp.password,
            isLoading: isLoading
        })
        setIsLoading(false);
    }
    return (
        <View className='flex-1 bg-white px-6 pt-10'>
            <View className='items-center gap-y-2'>
                <View className='flex-row items-center'>
                    <Image
                        source={require('../../assets/images/adaptive-icon.png')}
                        style={{ width: 80, height: 100 }}
                    />
                    <Text className='text-4xl font-bold text-emerald-700'>ExpGo</Text>
                </View>
                <Text className='text-gray-600 text-3xl font-bold mt-2'>Welcome to ExpGo</Text>
                <Text className='text-gray-400 text-sm text-center mt-1 font-semibold'>Sign up or login below to manage your project, task, and productivity</Text>
            </View>
            <View className='flex-row mt-6 border-b border-gray-300'>
                <TouchableOpacity className='flex-1 pb-2 border-b-2 border-emerald-700'>
                    <Text className='text-center text-emerald-700 font-bold'>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity className='flex-1 pb-2'>
                    <Text className='text-center text-emerald-700 font-bold'>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <View className='mt-6 gap-4'>
                <TouchableOpacity className='flex-row items-center justify-center bg-gray-200 py-3 rounded-lg px-4'>
                    <AntDesign name='google' size={20} className='mr-2' />
                    <Text className='text-center font-semibold text-black'>Login with Google</Text>
                </TouchableOpacity>
            </View>

            <Text className='text-gray-400 text-center my-4'>Or with continue with email</Text>

            <View className='gap-y-2'>
                <InputComponent
                    name='Email'
                    placeholder='Email'
                    value={signUp.email}
                    onChangeText={(text) => setSignUp({ ...signUp, email: text })}
                />
                <InputComponent
                    name='Password'
                    placeholder='Password'
                    value={signUp.password}
                    onChangeText={(text) => setSignUp({ ...signUp, password: text })}
                    secureTextEntry
                />
                <TouchableOpacity>
                    <Text className='text-gray-500 underline mb-2'>Forgot Password?</Text>
                </TouchableOpacity>
                <ButtonComponent
                    onPress={handleSignIn}
                    name='Login'
                    isLoading={isLoading}
                />
            </View>
        </View>
    )
}

export default SignIn;