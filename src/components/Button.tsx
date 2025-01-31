import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: 'primary' | 'back' | 'position'; // Define the available variants
}

function Button({ children, variant = 'primary', ...props }: ButtonProps) {
	return (
		<button className={`${styles.btn} ${styles[variant]}`} {...props}>
			{children}
		</button>
	);
}

export default Button;
