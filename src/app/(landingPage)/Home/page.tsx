'use client'
import { useEffect, useState } from "react";
import styles from './landingPage.module.scss';
import Image from 'next/image'
import { useRouter } from "next/navigation";

const LandingPage = () => {
    const [showPassword, setShowPassword] = useState(false);
      const router = useRouter()
   useEffect(() => {
    router.prefetch('/dashboard');
  }, [router]);

  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard'); 
  };

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Image 
                 priority
                src='/logo.svg' 
                alt="Company Logo"
                 width={50}
                   height={50}
                    className={styles.logo} />
                     
            </div>

            
            <div className={styles.contentWrapper}>
                
                <div className={styles.leftImage}>
                    <Image
                      priority
                     src="/sign.svg"
                      alt="Illustration"
                       width={400}
                       height={400}
                       className={styles.illustration} />
                </div>

                
                <div className={styles.formWrapper}>
                    <h2 className={styles.heading}>Welcome!</h2>
                    <p className={styles.subtext}>Enter your details to login</p>

                    <form className={styles.form} onSubmit={handleLogin}>
                        <input type="email" placeholder="Email" className={styles.input} />

                        <div className={styles.passwordWrapper}>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className={styles.input}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className={styles.toggleButton}
                            >
                                {showPassword ? "HIDE" : "SHOW"}
                            </button>
                        </div>

                        <a href="#" className={styles.forgotPassword}>Forgot password?</a>

                        
                        <button type="submit" className={styles.loginButton}>LOG IN</button>
                    
                    </form>
                </div>
            </div>
            
        </div>
    );
}

export default LandingPage