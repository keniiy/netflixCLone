import React from 'react';
import { Footer } from '../components'

export function FooterContainer() {
    return (
        <Footer>
             <Footer.Title>Questions? Contact Kenniy</Footer.Title>
             <Footer.Break />
             <Footer.Row>
                 <Footer.Column>
                     <Footer.Link href="#">FAQ</Footer.Link>
                     <Footer.Link href="#">Investors Relation</Footer.Link>
                     <Footer.Link href="#">Ways To Watch</Footer.Link>
                     <Footer.Link href="#">Co operate Informatio</Footer.Link>
                     <Footer.Link href="#">Kenniy Netflix Originals</Footer.Link>
                 </Footer.Column>

                 <Footer.Column>
                     <Footer.Link href="#">Help Center</Footer.Link>
                     <Footer.Link href="#">Jobs</Footer.Link>
                     <Footer.Link href="#">Terms Of Use</Footer.Link>
                     <Footer.Link href="#">Contact Kenniy</Footer.Link>
                 </Footer.Column>

                 <Footer.Column>
                     <Footer.Link href="#">Accounts</Footer.Link>
                     <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
                     <Footer.Link href="#">Privacy</Footer.Link>
                     <Footer.Link href="#">Speed Test</Footer.Link>
                 </Footer.Column>

                 <Footer.Column>
                     <Footer.Link href="#">Media Center</Footer.Link>
                     <Footer.Link href="#">Buy Gift Cards</Footer.Link>
                     <Footer.Link href="#">Cookie Prefe rences</Footer.Link>
                     <Footer.Link href="#">Legal Notice</Footer.Link>
                 </Footer.Column>
             </Footer.Row>
             <Footer.Break />
             <Footer.Break />
             <Footer.Text>Kenniy Nigeria Lagos</Footer.Text>
        </Footer>
    )
} 