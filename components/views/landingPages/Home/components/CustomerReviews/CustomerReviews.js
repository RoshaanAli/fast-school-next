import link from "@/config";
import { IMAGES } from "@/shared/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CustomerReviews = () => {
    const [defaultData, setDefaultData] = useState([])
    const dtReview = [
        {
            customerName: "Paolo R",
            customerReview: "Applicazione fantastica! Semplifica la pianificazione delle lezioni fornendo contenuti di qualità e mi aiuta ad avere sempre nuove idee molto apprezzate dai miei studenti. Ottimo rapporto qualità prezzo",
            customerImg: IMAGES.defaultUser_img
        },
        {
            customerName: "Alessandra L",
            customerReview: "Finalmente lo strumento giusto per ottimizzare il lavoro da svolgere a casa dopo un'estenuante giornata in classe. Grazie a questa app riesco ad avere più tempo libero da dedicare a me e ai miei figli. Davvero molto buono!",
            customerImg: IMAGES.defaultUser_img
        },
        {
            customerName: "Paola V",
            customerReview: "Inizialmente pensavo fosse la solita app che bloccava la magia dopo pochi utilizzi e invece...Wow! Al costo di 10€ posso usarlo all'infinito. Uno strumento fantastico che sta migliorando la qualità delle mie lezioni e facendomi risparmiare tempo prezioso.",
            customerImg: IMAGES.defaultUser_img
        },
    ];
    // const [reviews, setReviews] = useState([])
<<<<<<< HEAD
    // useEffect(async () => {
    //     try {
    //         // setIsLoading(true);
    //         const response = await fetch(`${link}/reviews`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         });
    //         const data = await response.json();
    //         console.log("=============",data)
    //         // setReviews(data)
    //     } catch (error) {
    //         console.log(error);
    //         toast.error('Qualcosa è andato storto, riprova più tardi.')
    //         // setIsLoading(false);
    //     } finally {
    //         // setIsLoading(false);
    //     }
    // }, [])
=======
    const getReviews = async () => {
        try {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch(`${link}/reviews`, requestOptions)
                .then(response => response.json())
                .then(result => setDefaultData(result))
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error);
            toast.error('Qualcosa è andato storto, riprova più tardi.')
            // setIsLoading(false);
        } finally {
            // setIsLoading(false);
        }
    }
    useEffect(() => {
        console.log(link)
        getReviews()
    }, [])

>>>>>>> 68a27f18bebbc327a370242bf7fcac663419d00e

    var settings = {
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 12000,
        autoplaySpeed: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
<<<<<<< HEAD
        <div id='customerReview'>




                <Slider slickPlay {...settings}>
            {dtReview.map((review, index) => (
                    <div class="review_item" key={index}>
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-2/3 text-left px-4 table">
                                <div class="profile_img_div display_table_cell align-middle">
                                    <img src={review.customerImg} />
                                </div>
                                <div class="profile_text_div border-0 display_table_cell align-middle">
                                    <div class="text-454545 reviews_username">{review.customerName}</div>
                                </div>
                            </div>
                            <div class="md:w-1/3 text-center pt-4 px-4">
                                <div class="reviews_verified">
                                    <span class="verify_text">VERIFIED</span>
                                </div>
                            </div>
                        </div>
                        <div class="!pt-2">
                            <div class="paragraph_text text-left text-707070">{review.customerReview}</div>
                        </div>
=======
        <section className="flex flex-wrap justify-center gap-4 p-6">
            {defaultData.map((review, index) => (
                <div
                    key={index}
                    className="max-w-xs rounded-lg px-6 py-10 border border-gray-300 shadow-sm shadow-gray-400"
                >
                    <div className="flex flex-col items-center">
                        <Image
                            src={review.customerImg}
                            alt="Customer Image"
                            width={100}
                            height={100}
                            className="rounded-full shadow-sm shadow-slate-900"
                        />
                        <h3 className="text-2xl font-semibold mt-4 uppercase text-center text-black">{review.message}</h3>
                        <p className="text-black mt-2 uppercase text-center">{review.user_name}</p>
>>>>>>> 68a27f18bebbc327a370242bf7fcac663419d00e
                    </div>


))}
                </Slider>



        </div>
    );
};

export default CustomerReviews;