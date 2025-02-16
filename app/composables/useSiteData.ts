import { ref, computed } from 'vue'
import type {
    Site,
} from '~/models/site'
import type {
    Address,
    Email,
    Link,
    Phone,
    SocialLink,
} from '~/models/common/'


export function useSiteData() {
    const addresses = ref<Address[]> ([
        {
            label: "work",
            address1: "794 Wilfred Road",
            address2: null,
            city: "Hudson",
            state: "WI",
            postal_code: "54016",
        },
        {
            label: "legal",
            address1: "794 Wilfred Road",
            address2: null,
            city: "Hudson",
            state: "WI",
            postal_code: "54016",
        }
    ])
    const emails = ref<Email[]> ([
        {
            display_name: "Business",
            account: "jovani",
            domain: "ochofitness.com"
        },
        {
            display_name: "Privacy",
            account: "privacy",
            domain: "ochofitness.com"
        }
    ])
    const phone = ref<Phone> ({
        raw: "+17157056361",
        formatted: "(715) 705-6361"
    })
    const navigation = ref<Link[]> ([
        {
            title: "Home",
            to: "/#home",
            external: true,
            icon: null,
            displayText: "Home",
            className: null
        },
        {
            title: "About Us",
            to: "/#about-us",
            external: true,
            icon: null,
            displayText: "About Us",
            className: null
        },
        {
            title: "Services",
            to: "/#services",
            external: true,
            icon: null,
            displayText: "Services",
            className: null
        },
        {
            title: "Testimonials",
            to: "/#testimonials",
            external: true,
            icon: null,
            displayText: "Testimonials",
            className: null
        },
        {
            title: "Contact Us",
            to: "/#contact-us",
            external: true,
            icon: null,
            displayText: "Contact Us",
            className: null
        }
    ])
    const social_links = ref<SocialLink[]> ([
        {
            label: "facebook",
            name: "Facebook",
            display_title: "jovani.morales.142",
            icon: "fa-brands fa-facebook",
            href: "https://www.facebook.com/jovani.morales.142"
        },
        {
            label: "instagram",
            name: "Instagram",
            display_title: "instagram.com/ocho_fitness_8",
            icon: "fa-brands fa-instagram",
            href: "https://www.instagram.com/ocho_fitness_8/"
        }
    ])
    const useful_links = ref<Link[]>([
        {
            title: "More about us",
            to: "/#about-us",
            external: true,
            icon: null,
            displayText: "About Us",
            className: null
        },
        {
            title: "Check out our blog",
            to: "/blog",
            external: true,
            icon: null,
            displayText: "Blog",
            className: null
        },
    ]);
    const resources = ref<Link[]>([
        {
            title: "Healthy Lifestyle",
            to: "https://www.mayoclinic.org/healthy-lifestyle/fitness/resources/hlv-20049447?p=1",
            external: true,
            icon: null,
            displayText: "Mayo Clinic Fitness",
            className: null
        },
        {
            title: "Stretching and Flexibility Exercises",
            to: "https://www.heart.org/en/health-topics/cardiac-rehab/getting-physically-active/stretching-and-flexibility-exercises",
            external: true,
            icon: null,
            displayText: "Stretching and Flexibility",
            className: null
        }
    ]);
    const legal = ref<Link[]>([
        {
            title: "Check out our terms and conditions",
            to: "/legal/terms-and-conditions",
            external: true,
            icon: null,
            displayText: "Terms & Conditions",
            className: null
        },
        {
            title: "View our privacy policy",
            to: "/legal/privacy-policy",
            external: true,
            icon: null,
            displayText: "Privacy Policy",
            className: null
        }
    ]);
    const site = ref<Site>({
        title: "Ocho Fitness",
        legalName: "Ocho Fitness LLC",
        tagLine: "Train Smart, Live Strong.",
        url: "https://www.ochofitness.com",
        addresses: addresses.value,
        email: emails.value,
        phone: phone.value,
        navigation: navigation.value,
        social_links: social_links.value,
        useful_links: useful_links.value,
        resources: resources.value,
        legal: legal.value,
    })

    const getSiteTitle = () => {
        return site.value.title;
    }
    const getAddressByLabel = (label: string) => computed(() => {
        return addresses.value.find(address => address.label === label) || null;
    });
    const getEmailByAccount = (account: string) => computed(() => {
        return emails.value.find(email => email.account === account) || null;
    });

    const getSocialLinkByLabel = (label: string) => computed(() => {
        return social_links.value.find(link => link.label === label) || null;
    })

    return {
        site,
        addresses,
        emails,
        phone,
        navigation,
        social_links,
        useful_links,
        resources,
        legal,
        getSiteTitle,
        getAddressByLabel,
        getEmailByAccount,
        getSocialLinkByLabel,
    }
}
