export const isAthleteNameSlug = (slug: string) => {
    return slug.split("-").length > 1;
}