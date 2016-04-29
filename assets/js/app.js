var app = angular.module('app', []);

app.controller('MainController', ['$scope', function($scope) {
    $scope.experiences =
    [
        {
            title: 'Automation Engineer, Bazaarvoice',
            text:  'Bazaarvoice is a network that connects brands and retailers to the authentic voices of people where they shop. Each month, more than 700 million people view and share authentic opinions, questions and experiences about tens of millions of products in the Bazaarvoice network. Their technology platform amplifies these voices into the places that influence purchase decisions. Network analytics help marketers and advertisers provide more engaging experiences that drive brand awareness, consideration, sales and loyalty.',
            image: 'assets/images/bazaarvoice_logo.jpg',
            link:  'https://www.bazaarvoice.com/'
        },
        {
            title: 'Application Developer, Validus Research Inc.',
            text:  'Validus\' underwriting philosophy is to maximize our return on equity, subject to prudent risk constraints, on the amount of capital we expose to any single event. This underwriting philosophy runs alongside our adherence to our enterprise risk management strategy and the maintenance of a conservative investment approach which focuses on preserving capital and liquidity. They underwrite a balanced and well-spread portfolio of primarily short-tail insurance and reinsurance business, giving superior risk and return characteristics. In this way, they aim to create franchise value while maximizing sustainable long-term growth in shareholder value.',
            image: 'assets/images/validus_research_logo.png',
            link: 'https://www.validusholdings.com/'
        },
        {
            title: 'Web Developer, Canadian Medical Protective Association (CMPA)',
            text : 'The CMPA is a not-for-profit association, incorporated by an Act of Parliament. Founded in 1901, the CMPA emerged from a need for physicians to work together to support their physician colleagues. While much has changed in the years since, the CMPA\'s tenet of mutuality — "for physicians by physicians" — has remained constant: the CMPA has a responsibility to its members, and members have a responsibility to each other and the CMPA. The CMPA By-law establishes the rules that guide the conduct of the Association\'s affairs. The CMPA is governed by an elected council of 30 practising physicians representing specific geographical areas of Canada, as well as various clinical practices. The council is responsible for overseeing the business of the Association and to direct management concerning operational matters.',
            image: 'assets/images/cmpa_logo.png',
            link: 'https://www.cmpa-acpm.ca/en'
        },
        {
            title: 'Java Developer, eHealth Ontario',
            text: 'eHealth Ontario connects physicians and health care providers by allowing the transmission of electronic health data across a wide network of EHR systems throughout the province. By building platforms like the Ontario laboratories information system (OLIS), we allow doctors and clinicians access to important medical tests and results in one centralized registry. We also provide funding to physicians to purchase EMR software and we partner with hospitals to develop EHR systems. eHealth Ontario is  funded by the Ministry of Health and Long-Term Care. We also work with the private sector to deliver electronic health care solutions which support regional planning authorities and private sector vendors who have the expertise to develop information technology (IT) solutions.',
            image: 'assets/images/eHealth_logo.png',
            link: 'https://www.ehealthontario.on.ca/en/'
        },
    ];
}]);