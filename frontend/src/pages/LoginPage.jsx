import React, { useState } from 'react';
import '../assets/css/Login.css';
import Iridescence from '../components/Iridescence';
import RotatingText from '../components/RotatingText';
import { Github, Linkedin, Youtube } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login:', { email, password, rememberMe });
    };

    const socialLinks = [
        {
            icon: Github,
            href: 'https://github.com/pauline-tnd/todo_manager.git',
            label: 'GitHub Repository',
            color: '#000000'
        },
        {
            icon: Linkedin,
            href: 'https://linkedin.com/in/pauline-tandianto-42a01b345',
            label: 'LinkedIn     Profile',
            color: '#103185ff'
        },
        {
            icon: Youtube,
            href: 'https://www.youtube.com/@paulinetandianto',
            label: 'YouTube Channel',
            color: '#c41919ff'
        },
    ];
    return (
        <div className="login-container">
            {/* Animated Background */}
            <div className="background-gradient">
                {/* <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div> */}
                <Iridescence
                    color={[0.8, 0.9, 1]}
                    mouseReact={false}
                    amplitude={0.1}
                    speed={0.5}
                />
            </div>


            {/* Main Card */}
            <div className="login-card">

                {/* Left Panel - Form */}
                <div className="login-panel">
                    {/* Logo */}
                    <div className="logo-section">
                        <img className="logo-img" src="/images/logo.png" alt="logo" />
                        {/* <div className="logo-icon">
                            <span>R</span>
                        </div> */}
                        <div className="logo-text">
                            <h1>REALIST</h1>
                            {/* <p>by Pauline Tandianto</p> */}
                        </div>
                    </div>

                    {/* User Avatar */}
                    <div className="avatar-section">
                        <div className="user-avatar">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="login-form">
                        {/* Email */}
                        <div className="input-group">
                            <div className="input-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="EMAIL"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        {/* Password */}
                        <div className="input-group">
                            <div className="input-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                            </div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="PASSWORD"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-input"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="password-toggle"
                            >
                                {showPassword ? (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                        <line x1="1" y1="1" x2="23" y2="23"></line>
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Login Button */}
                        <button type="submit" className="login-button">
                            LOGIN
                        </button>

                        {/* Options */}
                        <div className="form-options">
                            <label className="remember-checkbox">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="reset-password-link">Forgot Password?</a>
                        </div>
                    </form>

                    {/* Social Login */}
                    <div className="social-login">
                        {socialLinks.map(({ icon: Icon, href, label, color }) => (
                            <a key={label} href={href} target="_blank" style={{ "--hover-color": color }}>
                                <Icon className="social-btn" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Panel - Welcome */}
                <div className="welcome-panel">
                    <div className="glass-overlay"></div>

                    {/* Rainbow Arc Decoration */}
                    <div className="rainbow-arc"></div>

                    {/* Top Navigation */}
                    <div className="top-nav">
                        <button className="nav-btn">HOME</button>
                        <button className="menu-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    {/* Welcome Content */}

                    <div className="welcome-content">

                        <h1 className="welcome-title">Welcome.</h1>
                        <h1 className="stay-title">Stay
                            <RotatingText
                                texts={['Organized', 'Productive', 'Ahead']}
                                mainClassName="px-2 sm:px-2 md:px-3 bg-purple-700 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg inline-flex"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={3000}
                            />
                        </h1>
                        <p className="welcome-text">Join now and start managing your tasks</p>
                        <a href="/register" className="welcome-link">
                            Start for Free
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </a>
                    </div>

                    {/* Bottom Gradient */}
                    <div className="bottom-gradient"></div>
                </div>
            </div>
        </div>
    );
}
