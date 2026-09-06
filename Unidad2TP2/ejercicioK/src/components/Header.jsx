export default function Header() {
  return (
    <div className="flex flex-col items-center bg-[#FFF] w-full absolute left-0 top-0 right-0 z-50">
      <div className="flex justify-center items-center bg-[#1977CC] w-full h-10">
        <div className="flex max-w-[1320px] py-0 px-3 justify-between items-center w-full">
          <div className="flex items-center w-fit h-full">
            <div className="flex items-center w-fit">
              <div className="flex flex-col items-start w-3.5 h-3.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 w-3.5 h-3.5 relative "
                >
                  <path
                    d="M0 3.50002C0 3.00224 0.171111 2.58224 0.513333 2.24002C0.855556 1.8978 1.27556 1.72668 1.77333 1.72668H12.2733C12.74 1.72668 13.1444 1.8978 13.4867 2.24002C13.8289 2.58224 14 3.00224 14 3.50002V10.5C14 10.9978 13.8289 11.41 13.4867 11.7367C13.1444 12.0634 12.7244 12.2267 12.2267 12.2267H1.77333C1.27556 12.2267 0.855556 12.0634 0.513333 11.7367C0.171111 11.41 0 10.9978 0 10.5V3.50002ZM1.77333 2.61335C1.52444 2.61335 1.31444 2.69891 1.14333 2.87002C0.972222 3.04113 0.886667 3.25113 0.886667 3.50002V3.68668L7 7.37335L13.1133 3.68668V3.50002C13.1133 3.25113 13.0278 3.04113 12.8567 2.87002C12.6856 2.69891 12.4911 2.61335 12.2733 2.61335H1.77333ZM13.1133 4.71335L9.00667 7.18668L13.1133 9.70668V4.71335ZM13.1133 10.7334L8.16667 7.70002L7 8.40002L5.83333 7.70002L0.886667 10.7334C0.948889 10.92 1.05778 11.0756 1.21333 11.2C1.36889 11.3245 1.55556 11.3867 1.77333 11.3867H12.2733C12.46 11.3867 12.6311 11.3245 12.7867 11.2C12.9422 11.0756 13.0511 10.92 13.1133 10.7334ZM0.886667 9.70668L4.99333 7.18668L0.886667 4.71335V9.70668Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex pt-0 pr-0 pb-2 pl-[5px] justify-end items-center w-[215px] h-0">
                <p className="shrink-0 text-[var(--color-white-solid,#FFF)] font-roboto text-sm leading-[0em] w-[211px]">
                  contacto@centromedico.example
                </p>
              </div>
            </div>
            <div className="flex pl-6 flex-col items-start w-fit">
              <div className="flex items-center w-fit">
                <div className="flex flex-col items-start w-3.5 h-3.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 w-3.5 h-3.5 relative "
                  >
                    <path
                      d="M9.61334 0.886666C9.86223 0.886666 10.0722 0.972222 10.2433 1.14333C10.4145 1.31444 10.5 1.50889 10.5 1.72667V12.2267C10.5 12.4756 10.4145 12.6856 10.2433 12.8567C10.0722 13.0278 9.86223 13.1133 9.61334 13.1133H4.38668C4.13779 13.1133 3.92779 13.0278 3.75668 12.8567C3.58556 12.6856 3.50001 12.4756 3.50001 12.2267V1.72667C3.50001 1.50889 3.58556 1.31444 3.75668 1.14333C3.92779 0.972222 4.13779 0.886666 4.38668 0.886666H9.61334ZM4.38668 0C3.8889 0 3.4689 0.171111 3.12668 0.513333C2.78445 0.855556 2.61334 1.27556 2.61334 1.77333V12.2267C2.61334 12.7244 2.78445 13.1444 3.12668 13.4867C3.4689 13.8289 3.8889 14 4.38668 14H9.61334C10.1111 14 10.5311 13.8289 10.8733 13.4867C11.2156 13.1444 11.3867 12.7244 11.3867 12.2267V1.72667C11.3867 1.26 11.2156 0.855556 10.8733 0.513333C10.5311 0.171111 10.1111 0 9.61334 0H4.38668ZM7.00001 12.2267C7.2489 12.2267 7.4589 12.1489 7.63001 11.9933C7.80112 11.8378 7.88668 11.6356 7.88668 11.3867C7.88668 11.1378 7.80112 10.9278 7.63001 10.7567C7.4589 10.5856 7.2489 10.5 7.00001 10.5C6.75112 10.5 6.54112 10.5856 6.37001 10.7567C6.1989 10.9278 6.11334 11.1378 6.11334 11.3867C6.11334 11.6356 6.1989 11.8378 6.37001 11.9933C6.54112 12.1489 6.75112 12.2267 7.00001 12.2267Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex pl-[5px] flex-col items-start w-fit">
                  <p className="text-[var(--color-white-solid,#FFF)] font-roboto text-sm leading-[21px] w-fit">
                    0800 000 0000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center w-fit h-full">
            <div className="flex pl-5 flex-col items-start w-fit">
              <div className="flex flex-col items-start w-fit">
                <div className="flex items-start w-3.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 w-3.5 h-3.5 relative "
                  >
                    <path
                      d="M14 7.04667C14 5.77111 13.6889 4.59667 13.0667 3.52333C12.4444 2.45 11.5967 1.59444 10.5233 0.956667C9.45 0.318889 8.27556 0 7 0C5.72444 0 4.55 0.318889 3.47667 0.956667C2.40333 1.59444 1.55556 2.45 0.933333 3.52333C0.311111 4.59667 0 5.77111 0 7.04667C0 8.19778 0.256667 9.27111 0.77 10.2667C1.28333 11.2622 1.99111 12.0867 2.89333 12.74C3.79556 13.3933 4.80667 13.8133 5.92667 14V9.1H4.10667V7.04667H5.92667V5.50667C5.92667 4.63556 6.16 3.95889 6.62667 3.47667C7.09333 2.99444 7.73111 2.75333 8.54 2.75333C8.85111 2.75333 9.20889 2.76889 9.61333 2.8L10.1267 2.89333V4.62H9.24C8.83556 4.62 8.54 4.72111 8.35333 4.92333C8.16667 5.12556 8.07333 5.39778 8.07333 5.74V7.04667H10.0333L9.70667 9.1H8.07333V14C9.19333 13.8133 10.2044 13.3933 11.1067 12.74C12.0089 12.0867 12.7167 11.2622 13.23 10.2667C13.7433 9.27111 14 8.19778 14 7.04667Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex pl-5 flex-col items-start w-fit">
              <div className="flex flex-col items-start w-fit">
                <div className="flex items-start w-3.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 w-3.5 h-3.5 relative "
                  >
                    <path
                      d="M7 0C5.69333 0 4.72111 0.0155554 4.08333 0.0466661C3.44556 0.0777779 2.89333 0.186666 2.42667 0.373333C1.96 0.559999 1.54778 0.832222 1.19 1.19C0.832222 1.54778 0.56 1.96 0.373333 2.42667C0.186667 2.89333 0.0777778 3.44556 0.0466667 4.08333C0.0155556 4.72111 0 5.69333 0 7C0 8.30667 0.0155556 9.27889 0.0466667 9.91667C0.0777778 10.5544 0.186667 11.1067 0.373333 11.5733C0.56 12.04 0.832222 12.4522 1.19 12.81C1.54778 13.1678 1.96 13.44 2.42667 13.6267C2.89333 13.8133 3.44556 13.9222 4.08333 13.9533C4.72111 13.9844 5.69333 14 7 14C8.30667 14 9.27889 13.9844 9.91667 13.9533C10.5544 13.9222 11.1067 13.8133 11.5733 13.6267C12.04 13.44 12.4522 13.1678 12.81 12.81C13.1678 12.4522 13.44 12.04 13.6267 11.5733C13.8133 11.1067 13.9222 10.5544 13.9533 9.91667C13.9844 9.27889 14 8.30667 14 7C14 5.69333 13.9844 4.72111 13.9533 4.08333C13.9222 3.44556 13.8133 2.89333 13.6267 2.42667C13.44 1.96 13.1678 1.54778 12.81 1.19C12.4522 0.832222 12.04 0.559999 11.5733 0.373333C11.1067 0.186666 10.5544 0.0777779 9.91667 0.0466661C9.27889 0.0155554 8.30667 0 7 0ZM6.39333 1.26H7C8.30667 1.26 9.25556 1.27556 9.84667 1.30667C10.3444 1.33778 10.7567 1.41556 11.0833 1.54C11.41 1.66444 11.69 1.84333 11.9233 2.07667C12.1567 2.31 12.3356 2.59 12.46 2.91667C12.5844 3.24333 12.6622 3.65556 12.6933 4.15333C12.7244 4.74444 12.74 5.69333 12.74 7C12.74 8.30667 12.7244 9.25556 12.6933 9.84667C12.6622 10.3444 12.5844 10.7567 12.46 11.0833C12.3356 11.41 12.1567 11.69 11.9233 11.9233C11.69 12.1567 11.41 12.3356 11.0833 12.46C10.7567 12.5844 10.3444 12.6622 9.84667 12.6933C9.22444 12.7244 8.27556 12.74 7 12.74C5.72444 12.74 4.77556 12.7244 4.15333 12.6933C3.65556 12.6622 3.24333 12.5844 2.91667 12.46C2.59 12.3356 2.31 12.1567 2.07667 11.9233C1.84333 11.69 1.66444 11.41 1.54 11.0833C1.41556 10.7567 1.33778 10.3444 1.30667 9.84667C1.27556 9.22444 1.26 8.26778 1.26 6.97667C1.26 5.68556 1.27556 4.74444 1.30667 4.15333C1.33778 3.65556 1.41556 3.24333 1.54 2.91667C1.66444 2.59 1.84333 2.31 2.07667 2.07667C2.31 1.84333 2.59 1.66444 2.91667 1.54C3.24333 1.41556 3.67111 1.33778 4.2 1.30667C4.72889 1.27556 5.46 1.26 6.39333 1.26ZM10.7333 2.42667C10.5156 2.42667 10.3211 2.50444 10.15 2.66C9.97889 2.81556 9.89333 3.01 9.89333 3.24333C9.89333 3.47667 9.97889 3.67889 10.15 3.85C10.3211 4.02111 10.5233 4.10667 10.7567 4.10667C10.99 4.10667 11.1844 4.02111 11.34 3.85C11.4956 3.67889 11.5733 3.47667 11.5733 3.24333C11.5733 3.01 11.4956 2.81556 11.34 2.66C11.1844 2.50444 10.9822 2.42667 10.7333 2.42667ZM7 3.40667C6.34667 3.40667 5.74 3.56222 5.18 3.87333C4.62 4.18444 4.17667 4.62 3.85 5.18C3.52333 5.74 3.36 6.34667 3.36 7C3.36 7.65333 3.52333 8.26 3.85 8.82C4.17667 9.38 4.62 9.81556 5.18 10.1267C5.74 10.4378 6.34667 10.5933 7 10.5933C7.65333 10.5933 8.25222 10.43 8.79667 10.1033C9.34111 9.77667 9.76889 9.34111 10.08 8.79667C10.3911 8.25222 10.5467 7.65333 10.5467 7C10.5467 6.34667 10.3911 5.74778 10.08 5.20333C9.76889 4.65889 9.34111 4.22333 8.79667 3.89667C8.25222 3.57 7.65333 3.40667 7 3.40667ZM7 4.66667C7.40444 4.66667 7.79333 4.76778 8.16667 4.97C8.54 5.17222 8.82778 5.46 9.03 5.83333C9.23222 6.20667 9.33333 6.59556 9.33333 7C9.33333 7.40444 9.23222 7.79333 9.03 8.16667C8.82778 8.54 8.54 8.82778 8.16667 9.03C7.79333 9.23222 7.40444 9.33333 7 9.33333C6.34667 9.33333 5.79444 9.10778 5.34333 8.65667C4.89222 8.20556 4.66667 7.65333 4.66667 7C4.66667 6.34667 4.89222 5.79444 5.34333 5.34333C5.79444 4.89222 6.34667 4.66667 7 4.66667Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex pl-5 flex-col items-start w-fit">
              <div className="flex flex-col items-start w-fit">
                <div className="flex items-start w-3.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 w-3.5 h-3.5 relative "
                  >
                    <path
                      d="M0 0.98C0 0.731111 0.101111 0.505555 0.303333 0.303333C0.505556 0.101111 0.746667 0 1.02667 0H12.9733C13.2533 0 13.4944 0.101111 13.6967 0.303333C13.8989 0.505555 14 0.731111 14 0.98V13.02C14 13.2689 13.8989 13.4944 13.6967 13.6967C13.4944 13.8989 13.2533 14 12.9733 14H1.02667C0.746667 14 0.505556 13.8989 0.303333 13.6967C0.101111 13.4944 0 13.2689 0 13.02V0.98ZM4.34 11.7133V5.41333H2.24V11.7133H4.34ZM3.26667 4.52667C3.64 4.52667 3.93556 4.42556 4.15333 4.22333C4.37111 4.02111 4.47222 3.76444 4.45667 3.45333C4.44111 3.14222 4.33222 2.87778 4.13 2.66C3.92778 2.44222 3.64778 2.33333 3.29 2.33333C2.93222 2.33333 2.64444 2.44222 2.42667 2.66C2.20889 2.87778 2.1 3.14222 2.1 3.45333C2.1 3.76444 2.20889 4.02111 2.42667 4.22333C2.64444 4.42556 2.92444 4.52667 3.26667 4.52667ZM7.56 11.7133V8.16667C7.56 7.94889 7.59111 7.77778 7.65333 7.65333C7.71556 7.46667 7.84 7.29556 8.02667 7.14C8.21333 6.98444 8.44667 6.90667 8.72667 6.90667C9.1 6.90667 9.37222 7.03111 9.54333 7.28C9.71444 7.52889 9.8 7.88667 9.8 8.35333V11.7133H11.9V8.07333C11.9 7.14 11.6744 6.43222 11.2233 5.95C10.7722 5.46778 10.1889 5.22667 9.47333 5.22667C8.97556 5.22667 8.55556 5.35111 8.21333 5.6C7.96444 5.75556 7.74667 5.98889 7.56 6.3V5.41333H5.46C5.49111 5.66222 5.49111 6.78222 5.46 8.77333V11.7133H7.56Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-[60px] py-2.5 px-0 justify-center items-center w-full">
        <div className="flex max-w-[1320px] py-0 px-3 justify-between items-center w-full">
          <div className="flex min-w-fit flex-col items-start shrink-0">
            <div className="flex items-center w-full">
              <div className="flex flex-col items-start w-full">
                <p className="text-[var(--color-azure-28,#2C4964)] font-poppins text-3xl font-bold leading-9 w-full whitespace-nowrap">
                  Centro Médico
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-fit">
            <div className="flex items-center w-fit">
              <div className="flex py-[15px] px-3.5 flex-col items-start w-fit">
                <div className="flex py-0 px-0.5 items-center w-fit relative">
                  <div className="absolute -bottom-1.5 bg-[#1977CC] w-[41px] h-0.5"></div>
                  <p className="text-[var(--color-azure-45,#1977CC)] font-raleway text-[15px] leading-[22.5px] w-fit">
                    Inicio
                  </p>
                </div>
              </div>
              <div className="flex py-[15px] px-3.5 flex-col items-start w-fit">
                <div className="flex py-0 px-0.5 items-center w-fit">
                  <p className="text-[var(--color-azure-28,#2C4964)] font-raleway text-[15px] leading-[22.5px] w-fit">
                    La institución
                  </p>
                </div>
              </div>
              <div className="flex py-[15px] px-3.5 flex-col items-start w-fit">
                <div className="flex py-0 px-0.5 items-center w-fit">
                  <p className="text-[var(--color-azure-28,#2C4964)] font-raleway text-[15px] leading-[22.5px] w-fit">
                    Especialidades
                  </p>
                </div>
              </div>
              <div className="flex py-[15px] px-3.5 flex-col items-start w-fit">
                <div className="flex py-0 px-0.5 items-center w-fit">
                  <p className="text-[var(--color-azure-28,#2C4964)] font-raleway text-[15px] leading-[22.5px] w-fit">
                    Sedes
                  </p>
                </div>
              </div>
              <div className="flex py-[15px] px-3.5 flex-col items-start w-fit">
                <div className="flex py-0 px-0.5 justify-between items-center w-fit">
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[var(--color-azure-28,#2C4964)] font-raleway text-[15px] leading-[22.5px] w-fit">
                      Pacientes
                    </p>
                  </div>
                  <div className="flex pl-[5px] flex-col items-start w-fit">
                    <div className="flex flex-col items-start w-fit">
                      <div className="flex items-start w-3">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0 w-3 h-3 relative "
                        >
                          <path
                            d="M1.24 3.48001C1.32 3.40001 1.40666 3.36001 1.5 3.36001C1.59333 3.36001 1.68 3.40001 1.76 3.48001L6 7.72001L10.24 3.48001C10.32 3.40001 10.4067 3.36001 10.5 3.36001C10.5933 3.36001 10.68 3.40001 10.76 3.48001C10.84 3.56001 10.88 3.65335 10.88 3.76001C10.88 3.86668 10.84 3.94668 10.76 4.00001L6.27999 8.52001C6.2 8.60001 6.10666 8.64001 6 8.64001C5.89333 8.64001 5.79999 8.60001 5.72 8.52001L1.24 4.00001C1.16 3.94668 1.12 3.86668 1.12 3.76001C1.12 3.65335 1.16 3.56001 1.24 3.48001Z"
                            fill="#2C4964"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex py-[15px] px-3.5 flex-col items-start w-fit">
                <div className="flex py-0 px-0.5 items-center w-fit">
                  <p className="text-[var(--color-azure-28,#2C4964)] font-raleway text-[15px] leading-[22.5px] w-fit">
                    Portal profesionales
                  </p>
                </div>
              </div>
              <div className="flex pt-[15px] pr-0 pb-[15px] pl-3.5 flex-col items-start w-fit">
                <div className="flex py-0 px-0.5 items-center w-fit">
                  <p className="text-[var(--color-azure-28,#2C4964)] font-raleway text-[15px] leading-[22.5px] w-fit">
                    Contacto
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex pl-[30px] flex-col items-start w-fit">
            <div className="flex py-2 px-[25px] flex-col items-start rounded-[50px] bg-[#1977CC] w-fit">
              <p className="text-[var(--color-white-solid,#FFF)] font-roboto text-sm font-bold leading-[21px] w-fit">
                Solicitar turno
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
