import { ComplianceInfo } from '@/types';

export const complianceInfo: ComplianceInfo = {
  doctorName: 'Dr. Philipe Saraiva Cruz',
  crm: 'CRM-MG 69.870',
  specialty: 'Oftalmologista',
  disclaimer: 'As informações contidas neste site têm caráter meramente informativo e não substituem uma consulta médica. Somente um profissional habilitado pode realizar o diagnóstico e prescrever o tratamento adequado.'
};

export const whatsappConfig = {
  phoneNumber: '5533998601427',
  baseUrl: 'https://wa.me',
  defaultMessage: 'Olá! Tenho interesse no LAAS da Saraiva Vision. Gostaria de saber mais sobre os planos.',
  urgencyNumber: '5533984207437' // Enfermeira Ana - Urgência
};

export const clinicInfo = {
  name: 'Saraiva Vision',
  fullName: 'Clínica Oftalmológica Saraiva Vision',
  address: 'Rua Catarina Maria Passos, 97, Santa Zita',
  city: 'Caratinga',
  state: 'MG',
  zipCode: '35300-299',
  fullAddress: 'Rua Catarina Maria Passos, 97, Santa Zita, Caratinga - MG',
  email: 'saraivavision@gmail.com',
  phone: '(33) 99860-1427',
  cnpj: '53.864.119/0001-79',
  googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJVUKww7WRugARF7u2lAe7BeE',
  googleRating: 4.9,
  googleReviews: 102,
  workingHours: {
    weekdays: 'Segunda a Sexta, 08h às 18h',
    weekend: 'Fechado'
  },
  partner: {
    name: 'Amor e Saúde',
    url: 'https://www.amorsaude.com.br/clinica/caratinga-mg/'
  },
  socialMedia: {
    instagram: 'saraivavision',
    facebook: 'saraivavision',
    linkedin: 'saraivavision',
    tiktok: 'saraivavision',
    spotify: '6sHIG7HbhF1w5O63CTtxwV'
  },
  team: {
    doctor: {
      name: 'Dr. Philipe Saraiva Cruz',
      crm: 'CRM-MG 69.870',
      role: 'Responsável Técnico Médico',
      bio: 'Médico oftalmologista com sólida formação acadêmica e vasta experiência em diagnósticos precisos, tratamentos personalizados e cirurgias oculares. Especializado em diversas áreas da oftalmologia, incluindo catarata, glaucoma, doenças da retina e refração.'
    },
    nurse: {
      name: 'Ana Lúcia',
      role: 'Enfermeira',
      whatsapp: '5533984207437'
    }
  }
};
