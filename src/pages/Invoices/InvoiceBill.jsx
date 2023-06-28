import Header from "../../components/UI/Header";
import { useTranslation } from "react-i18next";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import { useScrollToUp } from "../../hooks/useScrollToUp";

const InvoiceBill = () => {
  useScrollToUp();
  const { t } = useTranslation();

  return (
    <div>
      <Header
        currentPage={{ title: t(["Invoices"]), icon: ApartmentOutlinedIcon }}
      />
      <table className="border border-black align-top text-text2">
        <tbody className="border-0 border-black align-top">
          <tr>
            <td className="w-1/2">
              <div className="border-2 border-black">
                {/* header */}
                <h5 className="font-bold text-center p-3 border-b border-[#464f5b]">
                  <span>"SABAH RESİDENCE"</span> Yaşayış Kompleksi
                </h5>
                {/*   huquqi wexs ve voen   */}
                <div class="flex justify-center gap-x-24 font-bold border-b p-2">
                  {" "}
                  <span class="fw-bold">(Hüquqi Şəxs)</span>{" "}
                  <span class="fw-bold">VÖEN: 1403915401</span>{" "}
                </div>

                {/* (Müəssisənin adı, VÖEN-i və digər lazimi göstəriciləri) */}

                <div class="text-center p-2 border-b">
                  <p className="text-sm font-semibold mb-2">
                    (Müəssisənin adı, VÖEN-i və digər lazimi göstəriciləri)
                  </p>
                  <h4 className="font-bold mb-2">
                    {" "}
                    MƏNZİL-KOMMUNAL XİDMƏTİ ÜÇÜN <br /> KASSA MƏDAXİL ORDERİ{" "}
                  </h4>
                  <p className="text-sm mb-2">16 fevral 2023, 12:00</p>
                </div>

                {/* Mənzil 500 Ödənişə təqdim olunmuş xidmət aşağıda göstərilib. */}

                <div class="p-2 border-bottom font-semibold">
                  {" "}
                  <p class="font-bold">Mənzil 500</p>{" "}
                  <p className="text-sm">
                    Ödənişə təqdim olunmuş xidmət aşağıda göstərilib.
                  </p>{" "}
                </div>

                {/* Mənzil, Tarix, Faktura, Ö / N */}

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="py-1 px-2 text-sm text-[#8391a2] border-l border-black border-t-2 border-r-2 border-r-black border-b-[1.5px] border-b-black">
                          Mənzil
                        </td>
                        <td className=" py-1 px-2 text-sm text-[#8391a2] border-l border-black border-t-2 border-r-2 border-r-black border-b-[1.5px] border-b-black">
                          Tarix
                        </td>
                        <td className=" py-1 px-2 text-sm text-[#8391a2] border-l border-black border-t-2 border-r-2 border-r-black border-b-[1.5px] border-b-black">
                          Faktura
                        </td>
                        <td className=" py-1 px-2 text-sm text-[#8391a2] border-l border-black border-t-2 border-r-2 border-r-black border-b-[1.5px] border-b-black">
                          Ö / N
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1 px-2 text-sm text-text2 border-l border-black border-t-2 border-r-2 border-r-black border-b-[1.5px] border-b-black">
                          500
                        </td>
                        <td className="py-1 px-2 text-sm text-text2 border-l border-black border-t-2 border-r-2 border-r-black border-b-[1.5px] border-b-black">
                          15 fev 2023
                        </td>
                        <td className="py-1 px-2 text-sm text-text2 border-l border-black border-t-2 border-r-2 border-r-black border-b-[1.5px] border-b-black">
                          268
                        </td>
                        <td className="py-1 px-2 text-sm text-text2 border-l border-black border-t-2 border-r-2 border-r-black border-b-[1.5px] border-b-black">
                          Onlayn
                        </td>
                      </tr>
                      <tr></tr>
                    </tbody>
                  </table>
                </div>

                <div className="border border-black">
                  <table class="w-full">
                    <tbody>
                      <tr class="border-b border-gray-700">
                        <th class="py-3 px-6 text-left">
                          Binanin servis haqqı
                        </th>
                        <th class="py-3 px-6 text-right">1 AZN</th>
                      </tr>
                      <tr>
                        <td class="py-3 px-6">
                          <p class="text-sm text-gray-600 mb-1">
                            Xidmət haqqı:
                          </p>
                          <p class="text-sm text-gray-600 mb-1">
                            Hesablama intervalı:
                          </p>
                          <p class="text-sm text-gray-600 mb-1">
                            Birdəfəlik Tarix aralığı: 15 fev 2023 - 15 fev 2023
                          </p>
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* umumi 1 azn */}
                <div className="border-2 border-black flex justify-between px-16 py-2 text-sm font-bold">
                  <p>Ümumi</p>
                  <p>1 AZN</p>
                </div>

                {/* Ödənişiniz üçün təşəkkür edirik! SABAH RESIDENCE MTK */}
                <div className="pl-16 py-4 border-b border-black">
                  <p className="font-semibold text-sm mb-[2px]">
                    Ödənişiniz üçün təşəkkür edirik!
                  </p>
                  <h3 className="text-sm">SABAH RESIDENCE MTK</h3>
                </div>
                {/* Xidmət RahatBina tərəfindən təqdim edilir. */}
                <div className="flex justify-between pl-16 py-6">
                  <p>Xidmət RahatBina tərəfindən təqdim edilir.</p>
                  <p>16 fevral 2023</p>
                </div>
              </div>
            </td>
            <td className="w-1/2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceBill;
