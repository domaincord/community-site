import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import { MdPerson, MdDescription, MdLocalOffer } from 'react-icons/lib/md'
import IframePreview from '../previews/IframePreview'

// Web preview configuration
const remoteURL = 'https://domaincord-community.netlify.app'
const localURL = 'http://localhost:8000'
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export const getDefaultDocumentNode = props => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props
  if (schemaType == 'post') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL })
    ])
  }
  return S.document().views([S.view.form()])
}

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title('Menu')
    .items([
      S.listItem()
        .title('Content')
        .child(
          S.list()
            .title('Content')
            .items([
              S.listItem()
                .title('Post Categories')
                .icon(MdLocalOffer)
                .schemaType('category')
                .child(S.documentTypeList('category').title('Post Categories')),
              S.listItem()
                .title('Blog Posts')
                .icon(MdDescription)
                .schemaType('post')
                .child(
                  S.documentTypeList('post')
                    .filter('_type == $type && postType == "blog"')
                    .title('Blog Posts')
                ),
              S.listItem()
                .title('Wiki Pages')
                .icon(MdDescription)
                .schemaType('post')
                .child(
                  S.documentTypeList('post')
                    .filter('_type == $type && postType == "wiki"')
                    .title('Wiki Pages')
                ),
              S.listItem()
                .title('Projects')
                .icon(MdDescription)
                .schemaType('project')
                .child(S.documentTypeList('project').title('Projects')),
              S.listItem()
                .title('Benefits')
                .icon(MdDescription)
                .schemaType('feature')
                .child(
                  S.documentTypeList('feature')
                    .filter('_type == $type && featType == "benefits"')
                    .title('Benefits')
                ),
              S.listItem()
                .title('Features')
                .icon(MdDescription)
                .schemaType('feature')
                .child(
                  S.documentTypeList('feature')
                    .filter('_type == $type && featType == "features"')
                    .title('Features')
                )
            ])
        ),
      S.listItem()
        .title('Media')
        .child(
          S.list()
            .title('Media')
            .items([
              S.listItem()
                .title('Videos')
                .icon(MdDescription)
                .schemaType('video')
                .child(S.documentTypeList('video').title('Videos')),
              S.listItem()
                .title('Images')
                .icon(MdDescription)
                .schemaType('mainImage')
                .child(S.documentTypeList('mainImage').title('Images'))
            ])
        ),
      S.listItem()
        .title('Profiles')
        .child(
          S.list()
            .title('Profiles')
            .items([
              S.listItem()
                .title('Authors')
                .icon(MdPerson)
                .schemaType('profile')
                .child(
                  S.documentTypeList('profile')
                    .filter('_type == $type && profileType == "authors"')
                    .title('Authors')
                ),
              S.listItem()
                .title('Members')
                .icon(MdDescription)
                .schemaType('profile')
                .child(
                  S.documentTypeList('profile')
                    .filter('_type == $type && profileType == "members"')
                    .title('Member Profiles')
                ),
              S.listItem()
                .title('Partners')
                .icon(MdDescription)
                .schemaType('profile')
                .child(
                  S.documentTypeList('profile')
                    .filter('_type == $type && profileType == "partners"')
                    .title('Partners')
                )
            ])
        ),
      ...S.documentTypeListItems().filter(
        listItem =>
          ![
            'category',
            'feature',
            'mainImage',
            'post',
            'profile',
            'project',
            'siteSettings',
            'video'
          ].includes(listItem.getId())
      ),
      S.divider(),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
    ])
