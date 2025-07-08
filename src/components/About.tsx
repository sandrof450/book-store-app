import { Truck, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about"  className="py-20 px-4 bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="transform transition-all duration-1000 translate-x-0 opacity-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop"
              alt="Interior de libraria"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
          <div
            className="
              space-y-6 trnasform 
              transition-all duration-1000 delay translate-x-0
              opacity-100
            "
          >
            <h3 className="text-4xl font-bold mb-6 ">Sobre a livraria</h3>
            <p className="textx-lg text-gray-700 leading-relaxed">
              dsfgsdfgdsfgdfgdsfgdsfgdsfgdsfgdsfgdsfgdsfgdsfgdsfgdsfgdfgdfgdf
              dsfgdsfgdsfgdsfdgdsfgtserthrfghrgtsagsrghfghfghdfghfghrf
            </p>
            <p className="textx-lg text-gray-700 leading-relaxed">
              dsfgsdfgdsfgdfgdsfgdsfgdsfgdsfgdsfgdsfgdsfgdsfgdsfgdsfgdfgdfgdf
              dsfgdsfgdsfgdsfdgdsfgtserthrfghrgtsagsrghfghfghdfghfghrf
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-3"/>
                <h4 className="font-bold text-xl mb-2">Comunidade</h4>
                <p className="text-grey-600">Mais de 15 mil leitores ativos</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Truck className="w-12 h-12 text-green-600 mx-auto mb-3"/>
                <h4 className="font-bold text-xl mb-2">Entrega</h4>
                <p className="text-grey-600">Frete grátis de  R$ 99,90</p>
              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
}