import { ref } from "vue";
import useSupabase from "../helpers/supabaseConfig";

// user is set outside of the useAuthUser function
// so that it will act as global state and always refer to a single user
const user = ref(null);

export default function useAuthUser() {

  const {supabase} = useSupabase();
  /**
   * Login with email and password
   */
    const login = async ({ email, password }) => {
        const { user, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        return user;
    };


  /**
   * Logout
   */
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  /**
   * Check if the user is logged in or not
   */
  const isLoggedIn = () => {
    return !!user.value;
  };

  /**
   * Register
   */
  const register = async ({ email, password, ...meta }) => {
    const { user, error } = await supabase.auth.signUp(
        { 
          email, 
          password,
          options: {data: meta}
        });
    if (error) throw error;
    console.log(user)
    return user;

  };

  /**
   * Update user email, password, or meta data
   */
  const update = async (data) => {
    const { user, error } = await supabase.auth.updateUser(data);
    if (error) throw error;
    return user;
  };

  /**
   * Send user an email to reset their password
   * (ie. support "Forgot Password?")
   */
  const sendPasswordRestEmail = async (email) => {
    const { user, error } = await supabase.auth.api.resetPasswordForEmail(email);
    if (error) throw error;
    return user;
  };

  return {
    user,
    login,
    isLoggedIn,
    logout,
    register,
    update,
    sendPasswordRestEmail,
  };
}