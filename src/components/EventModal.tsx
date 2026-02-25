import { useEffect, useState } from 'react';
import { X, Calendar, MapPin, Trophy } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

export default function EventModal() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkModalDisplay = () => {
            const lastDismissed = localStorage.getItem('lastModalDismissed');
            const now = Date.now();

            // Show if never dismissed or if 5 minutes (300000 ms) have passed since last dismissal
            if (!lastDismissed || now - parseInt(lastDismissed) > 300000) {
                // Wait a small delay before showing to not be intrusive immediately on load
                const timer = setTimeout(() => {
                    setIsOpen(true);
                }, 1000);
                return () => clearTimeout(timer);
            }
        };

        checkModalDisplay();

        // Optional: Set up an interval to check periodically if the user stays on the page for a long time
        const interval = setInterval(checkModalDisplay, 60000); // Check every minute

        return () => clearInterval(interval);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('lastModalDismissed', Date.now().toString());
    };

    const handleCTA = () => {
        handleClose();
        navigate('/inscription-scrabble-2026');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white z-10 transition-colors"
                >
                    <X className="w-5 h-5 text-gray-800 drop-shadow-md" />
                </button>

                {/* Image Section */}
                <div className="h-48 bg-gradient-to-r from-[#00723e] to-[#02abee] relative flex items-center justify-center overflow-hidden">
                    {/* Abstract decorative circles */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-20">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full mix-blend-overlay blur-xl"></div>
                        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400 rounded-full mix-blend-overlay blur-xl"></div>
                        <div className="absolute -bottom-10 left-1/2 w-56 h-56 bg-red-500 rounded-full mix-blend-overlay blur-2xl"></div>
                    </div>

                    <div className="text-center z-10 p-6">
                        <Trophy className="w-16 h-16 text-yellow-300 mx-auto mb-3 drop-shadow-lg" />
                        <h2 className="text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                            SUPER MASTERS
                        </h2>
                        <h3 className="text-xl font-bold text-white/90 tracking-widest uppercase">
                            Scrabble 2026
                        </h3>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 text-center space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-center gap-2 text-gray-700">
                            <Calendar className="w-5 h-5 text-[#00723e]" />
                            <span className="font-semibold text-lg">11 - 15 Mars 2026</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-gray-700">
                            <MapPin className="w-5 h-5 text-[#f00]" />
                            <span className="font-semibold text-lg">Douala, Cameroun</span>
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                        Rejoignez l'élite du Scrabble pour un tournoi inoubliable.
                        Préparez-vous à relever le défi !
                    </p>

                    <Button
                        onClick={handleCTA}
                        className="w-full py-6 text-lg font-bold bg-[#00723e] hover:bg-[#005c32] text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 rounded-xl"
                    >
                        Inscrivez-vous maintenant
                    </Button>
                </div>
            </div>
        </div>
    );
}
