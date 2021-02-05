export interface AlertModel {
    message: string;
    alertType?: string;
    alertIcon?: string;
    keepAfterRouteChange?: boolean;
}