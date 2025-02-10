import { FIREBASE_AUTH } from "@/firebase.config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import Toast from "react-native-toast-message";
const auth = FIREBASE_AUTH;

interface IAuth {
	email: string;
	password: string;
	isLoading?: boolean;
	isError?: string;
}

export const signInAPI = async (props: IAuth) => {
	try {
		await signInWithEmailAndPassword(auth, props.email, props.password);
		Toast.show({
			type: "success",
			text1: "Login successful!",
		});
	} catch (error) {
		Toast.show({
			type: "error",
			text1: "Login failed",
		});
	}
};

export const SignUp = async (props: IAuth) => {
	props.isLoading = true;
	try {
		const res = await createUserWithEmailAndPassword(
			auth,
			props.email,
			props.password
		);
	} catch (error) {}
};
