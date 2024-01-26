import link from "@/config";
import { IMAGES } from "@/shared/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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


    return (
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
                    </div>
                </div>
            ))}
        </section>
    );
};

export default CustomerReviews;