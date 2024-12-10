export interface ModalProps {
    isCancelMode?: boolean;
    onClose?: () => void;
    visible: boolean;
    setVisible?: (visible: boolean) => void;
    themeClass?: string;
}

export interface ButtonProps {
    height?: number;
    isEnabled?: boolean;
    size?: "sm" | "md" | "lg";
    theme?: "primary_1" | "primary_2" | "";
    label: string;
    onClick?: () => void;
}
