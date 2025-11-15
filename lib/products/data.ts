import laptopImg from "../images/laptop.webp"
import headphoneImg from "../images/headphone.webp"
import keyboardImg from "../images/keyboard.webp"
import airpodImg from "../images/airpod.webp"
import mobileImg from "../images/mobile.webp"
import mouseImg from "../images/mouse.webp"
import ps5Img from "../images/ps5.webp"
import speakerImg from "../images/speaker.webp"
import tvImg from "../images/tv.webp"
import watchImg from "../images/watch.webp"
import { Product } from "./types"

export const products: Product[] = [
    {
        id: "p1",
        name: "لپ تاپ X",
        price: 25000000,
        imageUrl: laptopImg,
        description:
            "لپ‌تاپ X یک دستگاه قدرتمند و مناسب برای استفاده‌های حرفه‌ای و روزمره است. این مدل با پردازنده سریع، حافظه SSD و کیفیت ساخت بالا عرضه می‌شود. برای برنامه‌نویسان، طراحان و دانشجویان انتخاب کاملاً مناسبی است."
    },
    {
        id: "p2",
        name: "گوشی موبایل A50",
        price: 12000000,
        imageUrl: mobileImg,
        description:
            "گوشی موبایل A50 با صفحه نمایش باکیفیت، باتری قدرتمند و دوربین چندگانه ارائه می‌شود. این دستگاه عملکرد روانی دارد و برای استفاده روزمره، شبکه‌های اجتماعی و بازی‌های سبک انتخاب بسیار خوبی است."
    },
    {
        id: "p3",
        name: "تلویزیون هوشمند 55 اینچ",
        price: 34000000,
        imageUrl: tvImg,
        description:
            "تلویزیون 55 اینچی با رزولوشن 4K، پردازشگر تصویر پیشرفته و قابلیت اجرای اپلیکیشن‌های استریم تجربه تماشای بسیار لذت‌بخشی ارائه می‌دهد."
    },
    {
        id: "p4",
        name: "ساعت هوشمند Fit Pro",
        price: 2800000,
        imageUrl: watchImg,
        description:
            "ساعت Fit Pro با امکانات اندازه‌گیری ضربان قلب، GPS داخلی، پایش خواب و نمایش اعلان‌ها برای کاربران فعال بسیار مناسب است."
    },
    {
        id: "p5",
        name: "کنسول PS5",
        price: 38000000,
        imageUrl: ps5Img,
        description:
            "کنسول PS5 با سخت‌افزار قدرتمند و SSD فوق سریع، اجرای بازی‌های نسل جدید را با گرافیک بی‌نظیر و سرعت بالا ممکن می‌کند."
    },
    {
        id: "p6",
        name: "ایرپاد پرو",
        price: 9500000,
        imageUrl: airpodImg,
        description:
            "ایرپاد پرو با قابلیت حذف نویز فعال و کیفیت صدای فوق‌العاده، یکی از بهترین انتخاب‌ها برای موسیقی و تماس‌های روزمره است."
    },
    {
        id: "p7",
        name: "هدفون گیمینگ G900",
        price: 3200000,
        imageUrl: headphoneImg,
        description:
            "هدفون G900 با صدای فراگیر و طراحی راحت، یکی از بهترین گزینه‌ها برای گیمرها در جلسات طولانی بازی است."
    },
    {
        id: "p8",
        name: "ماوس گیمینگ Razer",
        price: 2100000,
        imageUrl: mouseImg,
        description:
            "ماوس Razer با دقت بسیار بالا و طراحی ارگونومیک برای گیمرهای حرفه‌ای و برنامه‌نویسان مناسب است."
    },
    {
        id: "p9",
        name: "کیبورد مکانیکی Red Dragon",
        price: 2300000,
        imageUrl: keyboardImg,
        description:
            "کیبورد مکانیکی رد دراگون با نورپردازی RGB و سوییچ‌های مقاوم برای تایپ و گیمینگ ایده‌آل است."
    },
    {
        id: "p10",
        name: "اسپیکر بلوتوثی JBL",
        price: 4500000,
        imageUrl: speakerImg,
        description:
            "اسپیکر JBL با بیس قدرتمند و طراحی قابل‌حمل برای استفاده در فضای باز و مهمانی‌ها گزینه‌ای عالی است."
    }
];