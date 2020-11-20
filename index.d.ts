/*
 *                         __             __           
 *      ____    _____ ___ / /_  _______  / /__  _______
 *     (_-< |/|/ / -_) -_) __/ / __/ _ \/ / _ \/ __(_-<
 *    /___/__,__/\__/\__/\__/  \__/\___/_/\___/_/ /___/
 *                                                     
 */
/**
 * version : 0.0.2
 * @author : Ayoub hassani <hassani.ayoub@gmail.com>
 */
export as namespace Colors;
export function color(text:String, colorCode:Number): String;
export function bgColor(text:String, colorCode:Number): String;
export function enable(): void;
export function disable(): void;
export let enabled: boolean;

declare global {
    interface String {
        color(colorCode:Number): string;
        bgColor(colorCode:Number): string;
    }
}