#pages-router-next-app

The pages router is a legacy method and is still used widely. It is much stable than App Router. Though, new Next.js apps are built using App Router as it is more future-proof and offers more features than pages router.

#npm run dev - Run development server

- File-based routing instead of code-based
  . Create react component files and let Next.js infer .the routes from the folder structure
  . The folder structure is in the /pages folder
  . In a folder, index.js is taken as default for a folder. Other files in the same folder will be taken as other paths.
  . Instead of folder name as in App router, [...slug] is given as filename for dynamic routes in pages router.
  . [id] can also be used as folder name, if you have nested items. Refer code for implementation.
  . useRouter to extract values from the query
  . A filename with name 404.js is given as default page for page not found.
