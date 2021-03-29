describe('Integration', () => {
    it('renders the layout', () => {
        cy.visit('/');
        cy.contains('.navbar-brand', 'Welcome');
        cy.contains('footer', `© ${new Date().getUTCFullYear()}`);
    });

    it('renders the sidebar cameras', () => {
        cy.contains('aside', 'CAM 1');
        cy.contains('aside', 'CAM 2');
        cy.contains('aside', 'CAM 3');
    });

    it('renders the main camera', () => {
        cy.contains('section', 'CAM 4');
    });

    it('switches the main camera', () => {
        cy.get('.CamPlaceholder--Identifier1').click();
        cy.contains('aside', 'CAM 2');
        cy.contains('aside', 'CAM 3');
        cy.contains('aside', 'CAM 4');
        cy.contains('section', 'CAM 1');
    });

    it('switches the main camera again', () => {
        cy.get('.CamPlaceholder--Identifier2').click();
        cy.contains('aside', 'CAM 1');
        cy.contains('aside', 'CAM 3');
        cy.contains('aside', 'CAM 4');
        cy.contains('section', 'CAM 2');
    });
});
